import React from 'react';
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

export const App = () => (
  <div>
    <AutoForm schema={bridge} onSubmit={console.log}/>
  </div>
);
