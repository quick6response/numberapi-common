import { ParameterClientInfoActionEventAllPlatformInterface } from '@microservice/notification/types/parameter.client.info.type';
import type { User } from '@share/types';

export interface AuthLoginDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  /**
   *
   * @deprecated Используйте поле user
   * todo удалить в версии 2.0.0
   */
  userId?: User['id'];
}

export interface AuthRegistrationDto
  extends ParameterClientInfoActionEventAllPlatformInterface {
  /**
   *
   * @deprecated Используйте поле user
   * todo удалить в версии 2.0.0
   */
  userId?: User['id'];
}
