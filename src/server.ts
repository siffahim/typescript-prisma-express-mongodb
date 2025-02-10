import color from "colors";
import app from "./app";
import config from "./config";
import { errorLogger, logger } from "./shared/logger";

let server: any;
async function main() {
  try {
    const port =
      typeof config.port === "number" ? config.port : Number(config.port);

    server = app.listen(port, config.ip_address as string, () => {
      logger.info(color.green(`🚀 Application running on port:${port}`));
    });
  } catch (error) {
    errorLogger.error(color.red(`${error}`));
  }

  //handle unhandleRejection
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        errorLogger.error(`UnhandleRejection Detected: ${error}`);
      });
    } else {
      process.exit(1);
    }
  });
}

main();
