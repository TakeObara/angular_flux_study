export default (toastrConfig) => {

    'ngInject';

    angular.extend(toastrConfig, {
        allowHtml     : false,
        positionClass : 'toast-top-right',
        messageClass  : 'toast-message',
        timeOut       : 3000
    });
}