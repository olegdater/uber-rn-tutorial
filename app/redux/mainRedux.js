
const types = {
}

export const actionCreators = {
}


// This app doesn't use actual APIs or dynamic data currently,
// but feel free to take this app as a starting point and build it out
const initialState = {
  recentLocations: [
    { id: 0, icon: 'home', title: 'Home', subtitle: '123 Spear St, San Francisco' },
    { id: 1, icon: 'recent', title: 'Zynga HQ', subtitle: '699 8th St, San Francisco' },
    { id: 2, icon: 'recent', title: 'Facebook HQ', subtitle: '888 Brannan St, San Francisco, CA' },
    { id: 3, icon: 'recent', title: '123 Apple Road', subtitle: 'Cupertino, CA' },
    { id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA' },
  ]
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    default: {
      return state
    }
  }
}
