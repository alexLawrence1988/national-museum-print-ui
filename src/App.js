import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import ApolloClient from "apollo-boost";
import qry_list_by_page from "./graphql/queries/listByPage";
import Print from "./components/Print/Print";

const client = new ApolloClient({
  uri: "https://dev.heniapi.com/national-museum-prints/graphql",
});

function App() {
  const [printsData, setPrintsData] = useState({ info: {}, records: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, seterrorState] = useState(false);

  useEffect(() => {
    const loadPrintData = async (_) => {
      setIsLoading(true);
      seterrorState(false);
      try {
        const response = await client.query({
          query: qry_list_by_page,
          variables: {
            page: currentPage,
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

  const handlePageChange = (_, page) => setCurrentPage(page);

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
          <div data-test="error-alert" variant="danger">
            Oops, an error occurred, please reload the page.
          </div>
        ) : (
          <>
            {isLoading ? (
              <LinearProgress />
            ) : (
              <>
                <div className="print-container">
                  {printsData.records.map((print) => (
                    <Print
                      key={print.id}
                      print={print}
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
