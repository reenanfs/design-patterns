import { Radio, TV } from './concrete-implementator';
import { AdvancedRemote, BasicRemote } from './refined-abstraction';

const tv = new TV();
const radio = new Radio();

const basicRemoteForTV = new BasicRemote(tv);
const advancedRemoteForRadio = new AdvancedRemote(radio);

console.log('Using Basic Remote for TV:');
basicRemoteForTV.togglePower();
basicRemoteForTV.togglePower();

console.log('\nUsing Advanced Remote for Radio:');
advancedRemoteForRadio.togglePower();
advancedRemoteForRadio.mute();
advancedRemoteForRadio.togglePower();
