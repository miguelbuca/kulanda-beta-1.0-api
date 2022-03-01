import app from "./app";
import { connect } from "./database";

(async () => {
  try {
      await connect();
      const port = process.env.APP_PORT || 3000
      app.listen(port);
      console.table(`\nlisting on http://localhost:${port}/graphql`);
  } catch (error) {
      console.log(error)
  }
})();
