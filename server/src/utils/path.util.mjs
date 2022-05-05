import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getCurrentDirectoryFromURL = (url) => dirname(fileURLToPath(url));

export default getCurrentDirectoryFromURL;
