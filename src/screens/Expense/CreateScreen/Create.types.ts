import type { StackScreenProps } from '@react-navigation/stack';
import type { StackParamCreate } from '../../routers/Stack';

export type CreateScreenProps = StackScreenProps<
  StackParamCreate,
  'CreateScreen'
>;
