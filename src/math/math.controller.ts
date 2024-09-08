import { Controller } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}
  sum(data: number[]): number {
    return this.mathService.accumulate(data);
  }
}
