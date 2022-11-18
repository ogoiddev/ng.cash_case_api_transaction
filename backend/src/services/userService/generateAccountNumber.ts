const accountNumberGenerate = (userName: string) => {
  let account = '0';
  for (let i = 0; i < userName.length; i += 1) {
    account += userName.charCodeAt(i).toString();

    if (account.length >= 5) {
      return account.slice(0, 5);
    }
  }
};

export default accountNumberGenerate;
