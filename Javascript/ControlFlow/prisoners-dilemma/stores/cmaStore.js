var cmaStore = {
	cooperateCount: 0,
	defectCount: 0,
	history: [],
	move: move,
	name: 'CMA Store',
	revenue: 0
};

function move(moveNumber, oppHistory, oppCoopCount, oppDefectCount) {
	if(oppHistory.length < 1) return 'cooperate';
	return oppCoopCount >= oppDefectCount ? 'cooperate' : 'defect';
}