import Liquid from 'brazejs'

export default (templateSource: string, dataSource: string, root: string): Promise<string> => {
  return Promise.resolve()
    .then(() => {
      if (!templateSource) {
        return "<body>Select document to render</body>"
      }

      const engine = new Liquid({
        root,
      })

      let data = JSON.parse(dataSource || "{}")
      return engine.parseAndRender(templateSource, data)
    })
    .catch((error) => {
      return `
          <body>
              <h2>Error occured</h2>
              <pre>${error.message}</pre>
          </body>
      `
    })
}