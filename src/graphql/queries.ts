// tslint:disable
// this is an auto generated file. This will be overwritten

export const me = `query Me {
  me {
    Username
    UserAttributes {
      Name
      Value
    }
    UserCreateDate
    UserLastModifiedDate
    Enabled
    UserStatus
    MFAOptions {
      DeliveryMedium
      AttributeName
    }
    PreferredMfaSetting
    UserMFASettingList
  }
}
`;
export const echo = `query Echo($msg: String) {
  echo(msg: $msg)
}
`;
