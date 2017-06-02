var jnStore = {
	cooperateCount: 0,
	defectCount: 0,
	history: [],
	move: move,
	name: 'JN Store',
	revenue: 0
};

function move(moveNumber, oppHistory, oppCoopCount, oppDefectCount) {
	if(oppHistory.length < 5) return 'cooperate';
	var cooperateCount = 0;
	var defectCount = 0;
	for(var i=oppHistory.length-1; i>=oppHistory.length-5; i--) {
		if(oppHistory[i] === 'cooperate') cooperateCount++;
		else defectCount++;
	}
	return cooperateCount > 2 ? 'defect' : 'cooperate';
}