import { ToggleCommand } from './concrete-command';
import { Button, RemoteControl } from './invoker';
import { Fan, Light } from './receiver';

const light = new Light();
const fan = new Fan();

const lightToggleCommand = new ToggleCommand(light);
const fanToggleCommand = new ToggleCommand(fan);

const remoteControl = new RemoteControl();

const toggleLightButton = new Button('ToggleLight');
toggleLightButton.setCommand(lightToggleCommand);

const toggleFanButton = new Button('ToggleFan');
toggleFanButton.setCommand(fanToggleCommand);

remoteControl.addButton('ToggleLight', toggleLightButton);
remoteControl.addButton('ToggleFan', toggleFanButton);

remoteControl.pressButton('ToggleLight');
remoteControl.undoButton('ToggleLight');

remoteControl.pressButton('ToggleFan');
remoteControl.undoButton('ToggleFan');
