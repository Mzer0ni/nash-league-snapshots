const gql = require('graphql-request')
const fs = require('fs');
const path = require('path');

const dataFolder = '/data';
const now = new Date();
const pathToData = path.join(__dirname, dataFolder, fileString(now)) + '.json';

let data = [];
if (fs.existsSync(pathToData)) {
  data = JSON.parse(fs.readFileSync(pathToData));
}

async function main() {
  const endpoint = 'https://app.nash.io/api/graphql/explore'

  const query = gql.gql`
  query league($competitionId: ID!, $type: SoloRankingType!) {
    listCompetitions {
      id
      teamsEnabled
      name
      competitionEndsAt
      competitionStartsAt
      registrationEndsAt
      registrationStartsAt
      volume {
        amount
        currency
        __typename
      }
      __typename
    },
    listSoloRankings(competitionId: $competitionId, type: $type) {
      isMe
      name
      type
      volume {
        amount
        currency
        __typename
      }
      reward {
        amount
        currency
        __typename
      }
      __typename
    },
    listTeams(competitionId: $competitionId) {
      id
      name
      captainName
      captain {
        isMe
        name
        reward {
          amount
          currency
          __typename
        }
        volume {
          amount
          currency
          __typename
        }
        __typename
      }
      isMyTeam
      memberCount
      teamMembers {
        isMe
        name
        reward {
          amount
          currency
          __typename
        }
        volume {
          amount
          currency
          __typename
        }
        __typename
      }
      reward {
        amount
        currency
        __typename
      }
      volume {
        amount
        currency
        __typename
      }
      __typename
    }
  }
  `

  const variables = {
    competitionId: '53dc0843-b77d-4f33-829d-ec72fb86ee55',
    type: 'TOTAL_VOLUME'
  }

  const rdata = await gql.request(endpoint, query, variables)
  data.push(rdata)
}

main() // no top level await... yet
  .then(() => {
    // persist data
    data[data.length -1 ].snapTime = now
    fs.writeFileSync(path.resolve(pathToData), JSON.stringify(data, null, 2));
  })
  .catch((error) => console.error(error));


/**
 *
 * utils
 *
 */
function fileString(ts) {
  const year = ts.getUTCFullYear();
  const month = (ts.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = ts
    .getUTCDate()
    .toString()
    .toString()
    .padStart(2, '0');
  const name = `${year}-${month}-${day}`;
  return name;
}