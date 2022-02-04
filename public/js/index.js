"use strict";

const stakingAddress = '0xe33e05b2522355b103cdd281ad22e2f4517462ff';
const stakingAbi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"percentPer","type":"uint256"},{"internalType":"uint256","name":"accrualPeriod","type":"uint256"},{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"InvestPlans","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"uint256","name":"min_amount","type":"uint256"},{"internalType":"uint256","name":"max_amount","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"close","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAccrualPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPercentPer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserActiveInvestedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCountActiveDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCountDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"components":[{"internalType":"uint256","name":"investplan","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"percentPer","type":"uint256"},{"internalType":"uint256","name":"accrualPeriod","type":"uint256"},{"internalType":"uint256","name":"term","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"tw","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"}],"internalType":"struct StakingMP.Deposit","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getUserDividendsDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserDividendsTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserStakedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalActiveDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserTotalInvestedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getUserUnstakedTarif","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"reinvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"setAccrualPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"setPercentPer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"testCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"withdrawn","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const contractAddress = '0x02fBdE2C564D3E1babe4De4EF32f1c03e41c72B9';
const contractAbi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"start_time","type":"uint256"},{"internalType":"uint256","name":"sale_days","type":"uint256"},{"internalType":"uint256","name":"rate","type":"uint256"},{"internalType":"uint256","name":"minBUSD","type":"uint256"},{"internalType":"uint256","name":"maxBusdUser","type":"uint256"},{"internalType":"uint256","name":"forSale","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"divider","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"busd","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBusdOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getContractBalanceBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalanceToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDivider","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLeftToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxBusdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinBusd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSaleDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTokenOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTotalSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setDivider","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setForSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMaxBusdUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setMinBusd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_x","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setSaleDays","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_x","type":"uint256"}],"name":"setStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_x","type":"bool"}],"name":"setStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
const tokenAddress = '0xD88C6Ec2D3fBD90892c6749CF83De6ad10c30B4b';
const tokenAbi = JSON.parse('[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
const busdAddress = '0x231DE287cE9a4ca39CE8Fa669F0C593D6262523b';
const busdAbi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');

const timerString = document.getElementById('timerString');

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
let staking;
let token;
let tokenBalance;
let minBUSDval = 0;
let forSaleVal = 0;
let totalSoldVal = 0;
let leftToken = 0;
let RATEval = 0;
let endTime = 0;
let startTime = 0;
let active;
let approve = 0;

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
  staking = new web3.eth.Contract(stakingAbi,stakingAddress);
  token = new web3.eth.Contract(tokenAbi,tokenAddress);
}

async function fetchContractData(){
  await token.methods.balanceOf(selectedAccount).call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      tokenBalance = parseFloat(web3.utils.fromWei(data)).toFixed(2);
      document.querySelector("#tokenBalance").innerHTML = tokenBalance;
    }
  });
  let dividents = [];
  let invested = [];
  let unstaked = [];
  for(var i = 0;i<8;i++){
    await staking.methods.getUserDividendsTarif(selectedAccount,i).call(function (err, data) {
      if (err) { console.log(err) }
      if (data) {
        dividents[i] = data;
        if(i == 1 || i == 3 || i== 5 || i == 7){
          document.querySelector("#rewards"+i).innerHTML = parseFloat(web3.utils.fromWei(dividents[i])).toFixed(5);
        }
      }
    });
    await staking.methods.getUserStakedTarif(selectedAccount,i).call(function (err, data) {
      if (err) { console.log(err) }
      if (data) {
        invested[i] = data;
        document.querySelector("#invested"+i).textContent = web3.utils.fromWei(invested[i]);
      }
    });
    await staking.methods.getUserUnstakedTarif(selectedAccount,i).call(function (err, data) {
      if (err) { console.log(err) }
      if (data) {
        unstaked[i] = data;
        document.querySelector("#unstaked"+i).textContent = web3.utils.fromWei(unstaked[i]);
      }
    });
  }
  await contract.methods.getStatus().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      active = data;
    }
  });
  await contract.methods.getRate().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      RATEval = parseInt(data)/1000;
    }
  });
  await contract.methods.getTotalSold().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      totalSoldVal = parseFloat(web3.utils.fromWei(data));
    }
  });
  await contract.methods.getForSale().call(function (err, data) {
    if (err) { console.log(err) }
    if (data) {
      var td = parseFloat(web3.utils.fromWei(data));
      forSaleVal = td;
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

function getTimer(){
  var diff = 0;
  if(selectedAccount){
    if(startTime > 0 && endTime > 0){
      if(Date.now() / 1000 > startTime && Date.now() / 1000 < endTime){
        diff = Math.floor(endTime - (Date.now() / 1000));
        if(totalSoldVal >= forSaleVal || leftToken/RATEval < minBUSDval){
            diff = 0;
            timerString.innerHTML = "Sale ended";
        }else{
          if(!active){
            diff = 0;
              timerString.innerHTML = "Sale ended";
          }
        }
      }else if(Date.now() / 1000 >= endTime){
          timerString.innerHTML = "Sale ended";
      }else{
        diff = Math.floor(startTime - (Date.now() / 1000));
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
    fetchContractData();
  }
}
let timerId = setInterval(() => getTimer(), 1000);

async function approveToken(amount){
  let approveAmount;
  await token.methods.approve(stakingAddress,amount).send({ from: selectedAccount },function (err, data) {
    if (err) {
      console.log(err);
      approveAmount = 0;
    }
    if (data) {
      approveAmount = 1;
    }
  });
  return approveAmount;
}

async function invest(id){
  var amount = parseFloat(document.querySelector("#amount"+id).value);
  if(amount){
    amount = String(amount);
    amount = web3.utils.toWei(amount);
    approve = await approveToken(amount);
    if(approve){
      amount = web3.utils.fromWei(amount);
      await staking.methods.invest(id,amount).send({from: selectedAccount}, function (err, data) {
        if (err) {
          console.log(err);
        }
        if (data) {
          
        }
      });
    }
  }
}

async function withdrawn(id){
  await staking.methods.withdrawn(id).send({from: selectedAccount}, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      fetchContractData();
    }
  });
}

async function closeDep(id){
  await staking.methods.close(id).send({from: selectedAccount}, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      fetchContractData();
    }
  });
}

async function reinvest(id){
  await staking.methods.reinvest(id).send({from: selectedAccount}, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data) {
      fetchContractData();
    }
  });
}

async function refreshAccountData() {
  document.querySelector("#btn-connect").style.display = "none";
  document.querySelector("#btn-disconnect").style.display = "block";
  const accounts = await web3.eth.getAccounts();
  selectedAccount = accounts[0];
  var first = selectedAccount.slice(0, 5);
  var last = selectedAccount.slice(-3);
  document.querySelector("#btn-disconnect").textContent = first+"..."+last;
  fetchContractData();
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
