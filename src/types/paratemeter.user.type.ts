/**
 * Данные приходящие с сервиса АПИ после действия пользователя в системе
 */
export interface ParameterUserEventInterface {
	vk_access_token_settings: string;
	
	vk_app_id: string;
	
	vk_are_notifications_enabled: number;
	
	vk_is_app_user: number;
	
	vk_is_favorite: number;
	
	vk_language: string;
	
	vk_platform: string;
	
	vk_ref: string;
	
	vk_ts: string;
	
	vk_user_id: number;
	
	sign: string;
	
	ip: string;
	
	userAgent: string;
	
	date: number;
}
