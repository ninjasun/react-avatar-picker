import { AJAX_CALL_DELAY } from '../constants/';

export default async function API_update_avatar(avatar){
    if (avatar){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status:'OK',
                    code:200
                });
            }, AJAX_CALL_DELAY);
        });
    }
 }