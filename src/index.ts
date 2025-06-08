import app from './app';
import { AppDataSource } from './db';

const PORT = 4000;
async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(PORT);
    console.log(`server listening on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
}

main();
