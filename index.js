const crypto = require('crypto');
const ethers = require('ethers')
class CryptoEncrypt {
    static async getEtherWallet() {
        let signer = null;

        let provider;
        if (window.ethereum == null) {

            console.log("MetaMask not installed; using read-only defaults")
            provider = ethers.getDefaultProvider()

        } else {
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
        }
    }
    static convertETH(value) {
        // Convert user-provided strings in ether to wei for a value
        eth = parseEther(value)
        // Convert user-provided strings in gwei to wei for max base fee
        feePerGas = parseUnits(value, "gwei")
        formatEther(eth)
        return formatUnits(feePerGas, "gwei")
        // '4.5'
    }
    static encryptPassword(pwd, secretKey) {
        this.getEtherWallet()
        const pwdencrypted = this.convertETH(pwd)
        const cipher = crypto.createCipher("aes-128-ccm", secretKey);
        let en = cipher.update(pwdencrypted, 'utf8', 'hex');
        return en;
    }
}
module.exports = CryptoEncrypt
