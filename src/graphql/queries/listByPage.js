import { gql } from "apollo-boost";

export default gql`
  query ListByPage(
    $classification: String!
    $page: Float!
    $pageSize: Float!
    $sort: String!
    $sortOrder: SortOrder!
    $hasImage: Float!
  ) {
    listByPage(
      classification: $classification
      page: $page
      pageSize: $pageSize
      sort: $sort
      sortOrder: $sortOrder
      hasImage: $hasImage
    ) {
      info {
        totalrecordsperquery
        totalrecords
        pages
        page
        next
        prev
      }
      records {
        id
        title
        dated
        copyright
        contextualtextcount
        creditline
        accesslevel
        dateoflastpageview
        classificationid
        primaryimageurl
        people {
          alphasort
          birthplace
          culture
          deathplace
          displaydate
          displayname
          displayorder
          gender
          name
          personid
          prefix
          role
        }
      }
    }
  }
`;
