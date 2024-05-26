export const authBasePath = '/auth'

export const authUrls = {
  login: `${authBasePath}/login`,
  register: `${authBasePath}/register`,
  forgotPassword: `${authBasePath}/forgot-password`,
  passwordResetConfirm: `${authBasePath}/password-reset-confirm/:uid/:token`
}
