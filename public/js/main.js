"use strict";

const contractAddress = '0x02fBdE2C564D3E1babe4De4EF32f1c03e41c72B9';
const contractAbi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"busd","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBusdOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTokenOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
const tokenAddress = '0xD88C6Ec2D3fBD90892c6749CF83De6ad10c30B4b';
const tokenAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const busdAbi = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');

const investContract = document.getElementById('investContract');
const formido = document.getElementById('formido');
const progressInvest = document.getElementById('progressInvest');
const blockUserToken = document.getElementById('blockUserToken');
const getUserTokens = document.getElementById('getUserTokens');
const getToken = document.getElementById('getToken');
const maxBUSD = document.getElementById('maxBUSD');
const rate = document.getElementById('rate');
const amountInvest = document.getElementById('amountInvest');
const forSale = document.getElementById('forSale');
const forSaleProgress = document.getElementById('forSaleProgress');
const totalSold = document.getElementById('totalSold');
const totalInvestBUSD = document.getElementById('totalInvestBUSD');
const timerString = document.getElementById('timerString');
const checkWL = document.getElementById('whitlistcheck');
const whiteList = 0;
/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;
let web3;
let contract;
let token;
let busd;
let tokenBalance;
let busdBalance;
let existsAddress = false;
let approveAmount = 0;
let minBUSDval = 0;
let maxBUSDval = 0;
let forSaleVal = 0;
let totalSoldVal = 0;
let totalInvestBUSDval = 0;
let investedBUSDval = 0;
let leftToken = 0;
let RATEval = 0;
let endTime = 0;
let startTime = 0;
let active;

let userTokens = 0;
let userInvestedVal = 0;
let possibleInvestVal = 0;

async function init(){
  web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  var first = selectedAccount.slice(0, 5);
  var last = selectedAccount.slice(-3);
  document.querySelector("#btn-disconnect").textContent = first+"..."+last;
  document.querySelector("#btn-connect").style.display = "none";
  document.querySelector("#btn-disconnect").style.display = "block";
  contract = new web3.eth.Contract(contractAbi,contractAddress);
  token = new web3.eth.Contract(tokenAbi,tokenAddress);
  busd = new web3.eth.Contract(busdAbi,busdAddress);
}

async function fetchContractData(){
  await contract.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      active = data;
    }
  });
  await contract.methods.getMinBusd().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      minBUSDval = td;
    }
  });
  await contract.methods.getMaxBusdUser().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      maxBUSDval = td;
      maxBUSD.innerHTML = maxBUSDval;
    }
  });
  await contract.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEval = parseInt(data)/1000;
      rate.innerText = RATEval;
    }
  });
  await contract.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleVal = td;
      forSale.innerText = forSaleVal;
      totalInvestBUSDval = forSaleVal*RATEval;
      totalInvestBUSD.innerText = totalInvestBUSDval;
      forSaleProgress.innerText = totalInvestBUSDval;
    }
  });
  await contract.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldVal = parseFloat(web3.utils.fromWei(data));
      investedBUSDval = totalSoldVal*RATEval;
      totalSold.innerText = investedBUSDval.toFixed(2);
      progressInvest.style.width = parseFloat(totalSoldVal * 100 / forSaleVal) + "%";
    }
  });
  await contract.methods.getStartTime().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      startTime = parseInt(data);
    }
  });
  await contract.methods.getSaleDays().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      endTime = parseInt(data) + startTime;
    }
  });
  await contract.methods.getLeftToken().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      leftToken = parseFloat(web3.utils.fromWei(data));
    }
  });
}

async function fetchUserData(){
  if(whiteList == 1){
    existsAddress = await contract.methods.existsAddress(selectedAccount).call();
    if(existsAddress === true){
      checkWL.innerText = "You can invest";
      amountInvest.disabled = false;
      investContract.disabled = false;
    }else{
        checkWL.innerText = "Your address is not in the whitelist";
      amountInvest.disabled = true;
      investContract.disabled = true;
    }
  }else{
    existsAddress = true;
  }
  await token.methods.balanceOf(selectedAccount).call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      tokenBalance = parseFloat(web3.utils.fromWei(data)).toFixed(2);
      //document.querySelector("#tokenBalance").textContent = tokenBalance;
    }
  });
  await busd.methods.balanceOf(selectedAccount).call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      busdBalance = parseFloat(web3.utils.fromWei(data)).toFixed(2);
      //document.querySelector("#busdBalance").textContent = busdBalance;
    }
  });
  await contract.methods.getUserTokens(selectedAccount).call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      getUserTokens.innerHTML = parseFloat(web3.utils.fromWei(data)).toFixed(2);
      userTokens = parseFloat(web3.utils.fromWei(data));
      if(userTokens == 0){
        getToken.style.dispalay = "none";
      }
    }
  });
  await contract.methods.getUserTotalInvested(selectedAccount).call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      userInvestedVal = parseFloat(web3.utils.fromWei(data));
      possibleInvestVal = maxBUSDval - userInvestedVal;
    }
  });
}

function getTimer(){
  var diff = 0;
  if(selectedAccount){
    if(Date.now() / 1000 > startTime && Date.now() / 1000 < endTime){
      diff = Math.floor(endTime - (Date.now() / 1000));
      if(totalSoldVal >= forSaleVal || leftToken/RATEval < minBUSDval){
        diff = 0;
        formido.style.display = "none";
        if(userTokens > 0){
          getToken.style.display = "block";
        }
      }else{
        if(active){
          getToken.style.display = "none";
          investContract.style.display = "block";
          blockUserToken.style.display = "block"
          investContract.disabled = false;
          amountInvest.disabled = false;
        }else{
          diff = 0;
          timerString.innerHTML = "Sale ended";
          formido.style.display = "none";
          investContract.style.display = "none";
          amountInvest.style.display = "none";
          if(userTokens > 0){
            getToken.style.display = "block";
          }
        }
        
      }
    }else if(Date.now() / 1000 >= endTime){
        timerString.innerHTML = "Sale ended";
        formido.style.display = "none";
      if(userTokens > 0){
        investContract.style.display = "none";
        amountInvest.style.display = "none";
        getToken.style.display = "block";
      }
    }else{
      diff = Math.floor(startTime - (Date.now() / 1000));
      getToken.style.display = "none";
      investContract.disabled = true;
      amountInvest.disabled = true;
    }
    if(diff > 0){
      let days = Math.floor((diff % (60*60*60*24))/(60*60*24));
      let hours = (Math.floor((diff % (60*60*60*24))/(60*60)) < 10) ? '0' + Math.floor((diff % (60*60*60*24))/(60*60)) : Math.floor((diff % (60*60*60*24))/(60*60));
      let minutes = (Math.floor((diff % (60*60))/60) < 10) ? '0' + Math.floor((diff % (60*60))/60) : Math.floor((diff % (60*60))/60);
      let seconds = (Math.floor(diff % 60) < 10) ? '0' + Math.floor(diff % 60) : Math.floor(diff % 60);
      if(days == 0){
        timerString.innerHTML = hours+":"+minutes+":"+seconds;
      }else{
        hours = hours - days*24;
        timerString.innerHTML = days+" days "+hours+":"+minutes+":"+seconds;
      }
    }
  }
}
let timerId = setInterval(() => getTimer(), 1000);

async function approveToken(amount){
  await busd.methods.approve(contractAddress,amount).send({ from: selectedAccount },function (err, data) {
    if (err) {
      console.log(err);
      document.querySelector("#investContract").removeAttribute("disabled");
      document.querySelector("#investContract").textContent = "CONTRIBUTE";
      document.querySelector("#amountInvest").style.display = "block";
    }
    if (data) {
      approveAmount = parseFloat(web3.utils.fromWei(amount));
    }
  });
}

async function invest(amount) {
  if(existsAddress === true){
    await refreshAccountData();
    if(parseFloat(web3.utils.fromWei(amount)) >= minBUSDval && parseFloat(web3.utils.fromWei(amount))+userInvestedVal <= maxBUSDval && parseFloat(web3.utils.fromWei(amount))/RATEval <= leftToken){
      investContract.disabled = true;
      investContract.innerText = 'Doing...';
      await contract.methods.invest(amount).send({from: selectedAccount, gas: 4000000 }, function (error, result) {
        if (!error) {

        } else {
          console.log(error);
        }
      });
    }
    investContract.disabled = false;
    investContract.innerText = 'CONTRIBUTE';
    document.querySelector("#amountInvest").style.display = "block";
    await refreshAccountData();
  }
};

document.querySelector("#investContract").addEventListener('click', async () => {
  if(existsAddress === true && active){
    await refreshAccountData();
    if(Date.now() / 1000 > startTime && Date.now() / 1000 < endTime){
      var amount = parseFloat(document.getElementById('amountInvest').value)||0;
      if(amount >= minBUSDval){
        amount = amount.toString();
        amount = web3.utils.toWei(amount);
        document.querySelector("#amountInvest").style.display = "none";
        document.querySelector("#investContract").setAttribute("disabled", "disabled");
        document.querySelector("#investContract").textContent = "Approval";
        await approveToken(amount);
        if(approveAmount >= minBUSDval){
          document.querySelector("#investContract").textContent = "CONTRIBUTE";
          await invest(amount);
          await refreshAccountData();
        }else{
          document.querySelector("#investContract").removeAttribute("disabled");
        }
      }
    }
  }
});

getToken.addEventListener('click', async () => {
  var amount = userTokens||0;
  if(amount >= 0){
    getToken.disabled = true;
    getToken.innerText = 'Doing...';
    await contract.methods.getToken().send({from: selectedAccount}, function (error, result) {
      if (!error) {
        console.log(result);
        getToken.disabled = false;
        getToken.innerText = 'Get Tokens';
      } else {
        console.log(error);
        getToken.disabled = false;
        getToken.innerText = 'Get Tokens';
      }
    });
    refreshAccountData();
  }
});

async function refreshAccountData() {
  document.querySelector("#btn-connect").style.display = "none";
  document.querySelector("#btn-disconnect").style.display = "block";
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  var first = selectedAccount.slice(0, 5);
  var last = selectedAccount.slice(-3);
  document.querySelector("#btn-disconnect").textContent = first+"..."+last;
  fetchContractData();
  fetchUserData();
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {
  try {
      provider = await web3Modal.connect();
  } catch(e) {
    return;
  }

  await init();
  await fetchContractData();
  await fetchUserData();
  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    refreshAccountData()
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    refreshAccountData()
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    refreshAccountData()
  });
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {
  if(provider.close) {
    await provider.close;
    await web3Modal.clearCachedProvider();
    await web3Modal.providerController.clearCachedProvider();
  }
  await web3Modal.providerController.clearCachedProvider();
  selectedAccount = null;
  provider = null;
  selectedAccount = null;
  document.querySelector("#btn-connect").style.display = "block";
  document.querySelector("#btn-disconnect").style.display = "none";
  document.querySelector("#tokenBalance").textContent = "--";
  document.querySelector("#bnbBalance").textContent = "--";
  document.querySelector("#busdBalance").textContent = "--";
}


/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {  
          56: "https://bsc-dataseed.binance.org",
        },
        name: 'Binance Smart Chain',
        short_name: 'bsc',
        chain: 'smartchain',
        network: 'mainnet',
        chain_id: 56,
        network_id: 56,
        rpc_url: 'https://bsc-dataseed.binance.org',
        rpcUrl: "https://bsc-dataseed.binance.org",
        native_currency: {
          symbol: 'BNB',
          name: 'BNB',
          decimals: '18',
          contractAddress: '',
          balance: '',
        },
        infuraId: "d8a75fc2cb1248be8e0d329ba7c56185",
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350"
      }
    }
  };
  
  web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions,
    disableInjectedProvider: false,
  });
  if(web3Modal.providerController.cachedProvider){
    if(web3Modal.providerController.cachedProvider == "walletconnect"){
      provider = new WalletConnectProvider({
        rpc: {  
          56: "https://bsc-dataseed.binance.org",
        },
        name: 'Binance Smart Chain',
        short_name: 'bsc',
        chain: 'smartchain',
        network: 'mainnet',
        chain_id: 56,
        network_id: 56,
        rpc_url: "https://bsc-dataseed.binance.org",
        native_currency: {
          symbol: 'BNB',
          name: 'BNB',
          decimals: '18',
          contractAddress: '',
          balance: '',
        },
        infuraId: "d8a75fc2cb1248be8e0d329ba7c56185",
      });
      if(provider.networkId != 56){
        onDisconnect();
      }else{
        await provider.enable();
      }
    }else{
      for(var i = 0;i<=web3Modal.providerController.providers.length;i++){
        if(web3Modal.providerController.providers[i].id == web3Modal.providerController.cachedProvider){
          const connector = web3Modal.providerController.providerOptions[web3Modal.providerController.providers[i].id];
          const proxy = await connector;
          provider = await web3Modal.connect(proxy);
          break;
        }
      }
    }
  }
  if(provider){
    await init();
    await fetchContractData();
    await fetchUserData();
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      refreshAccountData()
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      refreshAccountData()
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      refreshAccountData()
    });
  }
  document.querySelector("#btn-connect").addEventListener("click", onConnect);
  document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});
