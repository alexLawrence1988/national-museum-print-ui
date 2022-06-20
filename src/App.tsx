import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import ApolloClient from "apollo-boost";
import qry_list_by_page from "./graphql/queries/listByPage";
import PrintCard from "./components/Print/PrintCard";
import { Print } from "./global/types";

const client = new ApolloClient({
  uri: "https://dev.heniapi.com/national-museum-prints/graphql",
});

function App() {
  const [printsData, setPrintsData] = useState<any>({ info: {}, records: [] });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorState, seterrorState] = useState<boolean>(false);

  useEffect(() => {
    const loadPrintData = async (page: number) => {
      setIsLoading(true);
      seterrorState(false);
      try {
        const response = await client.query({
          query: qry_list_by_page,
          variables: {
            page: page,
            pageSize: 10,
            classification: "Prints",
            sort: "rank",
            sortOrder: "asc",
            hasImage: 1,
          },
        });

        setPrintsData(response.data.listByPage);
      } catch (err) {
        console.log(err);
        seterrorState(true);
      }
      setIsLoading(false);
    };

    loadPrintData(currentPage);
  }, [currentPage]);

  const handlePageChange = (_: any, page: number) => setCurrentPage(page);

  return (
    <div className="App">
      <div className="container">
        <h1>National Museum Prints</h1>
        <p>
          This app is showing a feed of all public items classified as “Prints”,
          paged in pages of 10, ordered by rank descending, that have images and
          have been verified to the ‘Best’ standard.
        </p>
        {errorState ? (
          <div data-test="error-alert">
            Oops, an error occurred, please reload the page.
          </div>
        ) : (
          <>
            {isLoading ? (
              <LinearProgress />
            ) : (
              <>
                <div className="print-container">
                  {printsData.records.map((print: Print) => (
                    <PrintCard
                      key={print.id}
                      {...print}
                      data-test={"print-" + print.id}
                    />
                  ))}
                </div>
                <Stack className="pagination-container">
                  <Pagination
                    onChange={handlePageChange}
                    page={currentPage}
                    count={printsData.info.pages}
                    color="primary"
                  />
                </Stack>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
