const accountNumberGenerate = (userName: string) => {
  let account = '';
  for (let i = 0; i < userName.length; i += 1) {
    account += userName.charCodeAt(i).toString();
  }
  const mathIndex = () => Math.floor(Math.random() * account.length);

  const accountNumber = Array.from({ length: 5 })
    .map(() => mathIndex()).join('');

  return accountNumber.slice(0, 5);
};

export default accountNumberGenerate;
