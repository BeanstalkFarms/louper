import { NETWORKS } from '../../config'

export const getExplorerAddressUrl = (address: string, network: string): string => {
    return `${NETWORKS[network].explorerUrl}/address/${address}`
}

export const getExplorerTxUrl = (hash: string, network: string): string => {
    return `${NETWORKS[network].explorerUrl}/tx/${hash}`
}