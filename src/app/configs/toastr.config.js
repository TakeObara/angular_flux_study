export default function(toastrConfig) {
    'ngInject';

    angular.extend(toastrConfig, {
        allowHtml     : true,
        positionClass : 'toast-bottom-right',
        messageClass  : 'toast-message'
    });
}