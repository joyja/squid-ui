import gql from 'graphql-tag'
import fragment from './fragment'

const user = gql`
  query User {
    user {
      id
      username
    }
  }
`

const profiles = gql`
  query Profiles {
    profiles {
      ...ProfileBasic
    }
  }
  ${fragment.profile}
`

const containers = gql`
  query Containers {
    containers {
      ...ContainerBasic
    }
  }
  ${fragment.container}
`

const networkInterfaceConfigs = gql`
  query NetworkInterfaceConfigs {
    networkInterfaceConfigs {
      ...NetworkInterfaceConfigBasic
    }
  }
  ${fragment.networkInterfaceConfig}
`

const networkInterfaces = gql`
  query NetworkInterfaces {
    networkInterfaces {
      ...NetworkInterfaceBasic
    }
  }
  ${fragment.networkInterface}
`

export default {
  user,
  containers,
  profiles,
  networkInterfaceConfigs,
  networkInterfaces,
}
