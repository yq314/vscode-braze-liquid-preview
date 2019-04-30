import Liquid from 'brazejs'

export default (templateSource, dataSource): Promise<string> => {
  return Promise.resolve()
    .then(() => {
      if (!templateSource) {
        return "<body>Select document to render</body>"
      }

      const engine = new Liquid()

      let data = JSON.parse(dataSource || "{}");
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