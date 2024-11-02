// dto adalah data transfer object
// menggunakan class validator untuk validasi data
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  content: string;
}
