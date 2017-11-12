export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
export const SUBMIT_FORM = 'SUBMIT_FORM'
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS'
export const SHOW_LOADING = 'SHOW_LOADING'
export const UPLOADIMAGE_SUCCESS = 'UPLOADIMAGE_SUCCESS'

export function uploadImage(file) {
  return { type: UPLOAD_IMAGE, file }
}
export function submitForm(values) {
  return { type: SUBMIT_FORM, ...values }
}

export function submitSuccess() {
  return { type: SUBMIT_SUCCESS }
}

export function showLoading() {
  return { type: SHOW_LOADING }
}

export function uploadImageSuccess() {
  return { type: UPLOADIMAGE_SUCCESS }
}
