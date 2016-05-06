export default ($log, $websocket, MyConst) => {

	'ngInject';

	let ws = $websocket.$new({
        url       : MyConst.SOCKET_URL,
        reconnect : true
    });
}