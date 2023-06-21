import { Injectable } from '@nestjs/common';
import { promisify } from 'util';
import { exec } from 'child_process';
import * as fs from 'fs';

const execPromise = promisify(exec);

@Injectable()
export class UmlService {
  async generateUmlDiagram(pythonCode: string): Promise<string> {
    const filePath = 'code.py';

    await fs.promises.writeFile(filePath, pythonCode);
    const { stdout } = await execPromise(`pyreverse ${filePath}`);
    return stdout;
  }
}
