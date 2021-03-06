let defaultValue = '单笔限额15万，单日限额50万，单月限额无';
let list = {
  '00081': ['中国工商银行', '单笔限额4.99万，单日限额4.99万，单月限额无'],
  '00079': ['中国建设银行', '单笔限额100万，单日限额200万，单月限额500万'],
  '00082': ['中国银行', defaultValue],
  '00080': ['中国邮政储蓄银行', defaultValue],
  '00286': ['中信银行', '单笔限额2万，单日限额2万，单月限额无'],
  '00104': ['兴业银行', defaultValue],
  '00090': ['交通银行', defaultValue],
  '00089': ['上海浦东发展银行', '单笔限额4.99万，单日限额4.99万，单月限额无'],
  '00262': ['中国光大银行', '单笔限额100万，单日限额无，单月限额无'],
  '00097': ['上海银行', '单笔限额100万，单日限额无，单月限额无'],
  '00002': ['平安银行', '单笔限额1000万，单日限额无，单月限额无'],
  '00087': ['中国农业银行', defaultValue],
  '00085': ['招商银行', '单笔限额5万，单日限额5万，单月限额无'],
  '00227': ['华夏银行', defaultValue],
  '00084': ['广发银行', defaultValue],
  '00088': ['民生银行', defaultValue],
  '00122': ['北京银行', '单笔限额5万，单日限额无，单月限额无'],
  '00197': ['江苏银行', '单笔限额15万，单日限额150万，单月限额无']
};

exports.list = list;

exports.checkBank = function(bankNo) {
  return list[bankNo] != null;
};

exports.getBankInfo = function (bankNo) {
  return list[bankNo];
};
