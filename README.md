# Nash League S1 leaderboard snapshots
This repo provides daily RAW data extracted from the Nash GraphQL endpoint at https://app.nash.io/api/graphql/explore
Automatic snapshots are scheduled via Github Actions.

Much of the code is adapted from https://github.com/sw-yx/gh-action-data-scraping

To quickly inspect the data and structure without much tooling you could use an online JSON tree viewer like http://jsonviewer.stack.hu/

To ingest the data into your own workflow use the GitHub RAW endpoint. For example https://raw.githubusercontent.com/Mzer0ni/nash-league-snapshots/main/data/2021-01-04.json