import ReactGA from 'react-ga'

export const initGA = (trackingCode: string) => {
  ReactGA.initialize(trackingCode);
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '', label = undefined) => {
  if (category && action) {
    ReactGA.event({ category, action, label })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
