/*
 * File: DeploymentStatusStore.js
 * Date: Mon Jun 21 2010 18:15:20 GMT+0100 (BST)
 * 
 * This file was generated by Ext Designer version xds-1.0.1.0c.
 * http://www.extjs.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

DeploymentStatusStore = Ext.extend(Ext.data.ArrayStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        DeploymentStatusStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'DeploymentStatusStore',
            autoLoad: true,
            fields: [
                {
                    name: 'Awaiting Decommission'
                },
                {
                    name: 'field'
                },
                {
                    name: 'field'
                },
                {
                    name: 'field'
                },
                {
                    name: 'field'
                }
            ]
        }, cfg));
    }
});
new DeploymentStatusStore();