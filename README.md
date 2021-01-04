# Nash League S1 leaderboard snapshots
This repo provides daily RAW data extracted from the Nash GraphQL endpoint at https://app.nash.io/api/graphql/explore
Automatic snapshots are scheduled via Github Actions.

Much of the code is adapted from https://github.com/sw-yx/gh-action-data-scraping

To quickly inspect the data and structure without much tooling you could use an online JSON tree viewer like http://jsonviewer.stack.hu/ (Paste the json in the 'Text' tab then click the 'Viewer' tab)

To ingest the data into your own workflow use the GitHub RAW endpoint. For example https://raw.githubusercontent.com/Mzer0ni/nash-league-snapshots/main/data/2021-01-04.json

## Metadata
There is one file per day. The JSON file is a list (array) of objects. Each object containing one snapshot. Meaning if there is one snapshot scheduled per day, there will be one object per file. If there is multiple snapshots; the last object in list is the latest snapshot.
- Each object has one additional field `snapTime` containing the timestamp for the snapshot.

This repository will be set to take one snapshot per 12 hours (2 per day). If you want more. Ask me in Telegram @Mzer0ni or open issue.