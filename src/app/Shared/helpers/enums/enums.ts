export enum MyAdStatus {
  all = 'all',
  pending = 'Pending',
  active = 'Active',
  rejected = 'Reject',
  expired = 'Expired',
  sold = 'Sold',
}

export enum MyAdStatusNum {
  pending = 0,
  active = 1,
  rejected = -1,
  expired = -2,
  sold = 2,
}

export const pagingationPage: number[] = [12, 30, 50, 100];

export const pageNotification: number[] = [10, 20, 50, 100];

export enum priceRange {
  start = 0,
  end = 20000000,
}

export enum ProductView {
  listview = 'list',
  boxview = 'box',
}

export enum AdsStatus {
  all = 'all',
  active = 'active',
  inactive = 'inactive',
  pending = 'pending',
}

export enum SocialLogin {
  Google = 'Google',
  Facebook = 'Facebook',
  // tiktok = 'TikTok',
  // appleStore = 'appleStore',
}


export enum StorageKeys {
  user = 'user',
  token = 'token',
  FCM = "FCM"
}

export const showIncludes = {
  showSharedComps: {
    showTopHeader: true,
    showBottomHeader: true,
    showCategories: true,
    showTopFooter: true,
    showBottomFooter: true,
    showAdHeader: false,
  },
  hideSharedComps: {
    showTopHeader: false,
    showBottomHeader: false,
    showCategories: false,
    showTopFooter: false,
    showBottomFooter: false,
    showAdHeader: true,
  },
};

export const staticFields = {
  titles: {
    title: 'Title',
    price: 'Price',
    isWhatsapp: 'Show WhatsApp',
    isNumber: 'Show Number',
    description: 'Description',
    location: 'Your location',
    images: 'Product Images',
  },
  placeholders: {
    title: 'Enter Title',
    price: 'Enter Price',
    isWhatsapp: 'Show Whatsapp',
    isNumber: 'Show Number',
    description: 'Enter Description',
    location: 'Select location',
    images: 'Product Images',
  },
};

export enum notificationIcon {
  error = 'error',
  success = 'success',
  warning = 'warning',
  info = 'info',
  question = 'question',
}

export enum Validations {
  email = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
  name = '^[a-zA-Z0-9 ]+$',
}

export enum iconPaths {
  success = 'assets/images/common/success icon.svg',
  error = 'assets/images/common/error icon.svg',
  warning = 'assets/images/common/warning icon.svg',
  question = 'assets/images/common/question icon.svg',
}

export enum alertMsgs {
  default = 'Congratulations! Your task has been done successfully',
  error = 'Something went wrong when performing the task',
  warning = 'Acknowledge before pressing done',
  somethingWentWrong = 'Somethint went wrong',
  helpSuccess = 'Message Sent Successfully! Thanks for Reaching out for help at Classified. You are Always welcome here.',
  notification = "You received a notification",
  notificationPermissionNotProvided = "Notification permission not provided"
}

export enum alertSubmitBtnMsgs {
  default = 'Done',
  goToHome = 'Go to Home',
  toToMyAds = 'Go to my Ads',
}

export enum reportType {
  user = 'seller',
  ad = 'ad',
}

export enum chatType {
  text = 'text',
  image = 'image',
}

export enum confirmModelTypes {
  deleteAccount = 'deleteAccount',
}

export enum dummyKeys {
  filter = 'fba38eb17c',
}
