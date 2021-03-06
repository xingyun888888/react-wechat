import reqwest from 'reqwest';
import configs from 'api/configs';
import {
  getItem,
  setItem
} from './Cache';

exports.login = function(t) {
  let url = 'http://test3-fbtoam.pingan.com.cn/btoa/portal/login?userId=15680260919&passWord=61BE8471ECAA61A7EEB84C68F0D4F8A8BA4E42A3892DACD0325A3C077750FA21DD7CFC9DE284AD2D142BB9A809BE59679182C78A669D6E950DC9B5A039C600B00F1AAA1B3122B747062AFB2082B9130F9D03FB7DB7C88EB6E7B27C00FD116E6BCFF2BD1C21667DE0C861E3E7DC53C27360F2ACA207EE0755B71CCB59D81BB703&anydoorSdkVersion=&anydoorAppId=&ffAppID=10004&ffOs=iOS&ffOsVersion=11&ffNativeVersion=1.0&anydoorSdkVersion=0.0.0&ffApiVersion=1&ffDeviceID=8DCA95F8-8078-4AC2-9A55-D79631271B35';
  if (t === 2) {
    url = 'http://test3-fbtoam.pingan.com.cn/btoa/portal/login?userId=15063461892&passWord=58D49A96194D2C15D32504716E24EA66F8A1F0F8046E58C1462FCBAA2CAECBF7B91A20231016021E43948FC4A41D1BD4F09A589D502AF28D43E859A9A464F4991CB076FD18AF0557F760B87DEFA2B5C4F90EF90853653C7D2D5DC5718BADFF0DB91823AEBD878C49FA1356F4E93EB6ED1E2C0B5F4B6D6304A7FD0C84C0853E0B&anydoorSdkVersion=1.1.0.0&anydoorAppId=PA01100000000_01_FSTD&ffAppID=10004&ffDeviceID=1234&ffOs=ios&ffOsVersion=8.1.2&ffNativeVersion=1.2.0&ffInfVersion=&ffChannel=10000';
  } else if (t === 1) {
    url = 'http://test3-fbtoam.pingan.com.cn/btoa/portal/login?userId=15063461891&passWord=58D49A96194D2C15D32504716E24EA66F8A1F0F8046E58C1462FCBAA2CAECBF7B91A20231016021E43948FC4A41D1BD4F09A589D502AF28D43E859A9A464F4991CB076FD18AF0557F760B87DEFA2B5C4F90EF90853653C7D2D5DC5718BADFF0DB91823AEBD878C49FA1356F4E93EB6ED1E2C0B5F4B6D6304A7FD0C84C0853E0B&anydoorSdkVersion=1.1.0.0&anydoorAppId=PA01100000000_01_FSTD&ffAppID=10004&ffDeviceID=1234&ffOs=ios&ffOsVersion=8.1.2&ffNativeVersion=1.2.0&ffInfVersion=&ffChannel=10000';
  } else if (t === 3) {
    url = 'http://test3-fbtoam.pingan.com.cn/btoa/portal/login?userId=15063461893&passWord=58D49A96194D2C15D32504716E24EA66F8A1F0F8046E58C1462FCBAA2CAECBF7B91A20231016021E43948FC4A41D1BD4F09A589D502AF28D43E859A9A464F4991CB076FD18AF0557F760B87DEFA2B5C4F90EF90853653C7D2D5DC5718BADFF0DB91823AEBD878C49FA1356F4E93EB6ED1E2C0B5F4B6D6304A7FD0C84C0853E0B&anydoorSdkVersion=1.1.0.0&anydoorAppId=PA01100000000_01_FSTD&ffAppID=10004&ffDeviceID=8DCA95F8-8078-4AC2-9A55-D79631271B35&ffOs=ios&ffOsVersion=8.1.2&ffNativeVersion=1.2.0&ffInfVersion=&ffChannel=10000';
  } else if (t === 4) {
    url = 'http://test3-fbtoam.pingan.com.cn/btoa/portal/login?userId=13823407448&passWord=68621372C3D3DEED6B8AA5F4679469AA6BD5862F57AE372DD29900A6D5E7C9AD2C3FFDF022406491311EB6A774BA5501A097EEA3FE6D1392D9A0CDCC6BE1B700E92FEEC473C308A90D527A85C8C7440F339B51A00B15FB1FE01F3A8F927B98F8720A916490F1FADBE4B756D862A445EEC12952B9276ACB65D32CCBDC5924BEA0&ffDeviceID=123456&anydoorSdkVersion=&ffInfVersion=';
  }
  if (configs.isMock) {
    url = '../mock/login.json';
  }
  // setUserInfo(t);
  reqwest({
    url: url,
    method: 'get',
    type: 'json',
    success: function(res) {
      setItem('userInfo', res.data.userInfo);
    }
  });
};

// http://test3-fbtoam.pingan.com.cn/btoa/work/account/getCustInfo?idNo=440582199001012914&cifName=%E5%B0%8F%E4%BC%99%E5%AD%90
// http://test3-fbtoam.pingan.com.cn/btoa/portal/login?userId=13823407448&passWord=68621372C3D3DEED6B8AA5F4679469AA6BD5862F57AE372DD29900A6D5E7C9AD2C3FFDF022406491311EB6A774BA5501A097EEA3FE6D1392D9A0CDCC6BE1B700E92FEEC473C308A90D527A85C8C7440F339B51A00B15FB1FE01F3A8F927B98F8720A916490F1FADBE4B756D862A445EEC12952B9276ACB65D32CCBDC5924BEA0&ffDeviceID=123456&anydoorSdkVersion=&ffInfVersion=
