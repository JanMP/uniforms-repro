import React, {useState} from 'react';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';


// uniforms unstyled from npm import, works as expected on both browser and cordova:

// import {AutoForm} from 'uniforms-unstyled'


// uniforms unstyled copied from node modules and changed background of text field to yellow
// works on browser but yields error on cordova:

import {AutoForm} from '/imports/ui/uniforms-custom';


// uniforms unstyled copied into local meteor package and changed background of text field to pink
// works on browser but yields error on cordova:

// import {AutoForm} from 'meteor/janmp:uniforms-custom';


const schema = new SimpleSchema({
  someString: String
});

const bridge = new SimpleSchema2Bridge(schema);

export const App = () => {
  var [showForm, setShowForm] = useState(false);

 return (<div>
    <button onClick={() => setShowForm(!showForm)} >toggle form</button>
    {showForm && <AutoForm schema={bridge} onSubmit={console.log}/>}
  </div>)
};
