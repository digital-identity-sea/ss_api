import GrantStore from './store/grant';
export default function makeGrantService() {
    return {
        /**
         * @param {string} accessGrantId
         */
        async getGrantById(accessGrantId) {
            const result = await GrantStore.getGrant(accessGrantId);
            return result;
        },
    };
}
