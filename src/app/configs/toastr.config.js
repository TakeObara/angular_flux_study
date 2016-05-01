export default function(toastrConfig) {
    'ngInject';

    angular.extend(toastrConfig, {
        allowHtml     : true,
        positionClass : 'toast-top-right',
        messageClass  : 'toast-message'
    });
}