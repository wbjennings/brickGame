import mixpanel from 'mixpanel-browser'
mixpanel.init('b4415f9cba52abb8ac4f7e2997f25699', { debug: true, track_pageview: true, persistence: 'localStorage' })

export const track = (...args) => mixpanel.track(...args)