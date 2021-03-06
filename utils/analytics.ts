import ReactGA from 'react-ga'

export const initGA = (trackingCode: string) => {
  ReactGA.initialize(trackingCode);
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '', value: any = '') => {
  if (category && action) {
    ReactGA.event({ category, action, value })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
