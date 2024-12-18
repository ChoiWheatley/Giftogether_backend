import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateFundingDto } from './create-funding.dto';

export class UpdateFundingDto extends PickType(CreateFundingDto, [
  'endAt',
  'fundCont',
  'fundImg',
  'fundTitle',
  'fundTheme',
  'fundGoal',
  'fundPubl',
  'fundAddrRoad',
  'fundAddrDetl',
  'fundAddrZip',
  'fundRecvName',
  'fundRecvPhone',
  'fundRecvReq'
] as const) {}
