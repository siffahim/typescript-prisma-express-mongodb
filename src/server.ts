import color from "colors";
import app from "./app";
import config from "./config";

let server: any;
async function main() {
  try {
    const port =
      typeof config.port === "number" ? config.port : Number(config.port);

    app.listen(port, config.ip_address as string, () => {
      console.log(color.green(`🚀 Application running on port:5000`));
    });
  } catch (error) {
    console.log(error);
  }

  //handle unhandleRejection
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(color.red(`UnhandleRejection Detected: ${error}`));
      });
    } else {
      process.exit(1);
    }
  });
}

main();
