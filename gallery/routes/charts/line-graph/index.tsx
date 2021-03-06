import {cx, Button, Section, FlexRow, Route, RedirectRoute, PureContainer} from 'cx/widgets';
import {bind, expr, FirstVisibleChildLayout} from 'cx/ui';

import {getHeader} from "../../../components/getHeader";
import {SandboxedRoute, SandboxedAsyncRoute} from "../../../components/asyncRoute";

const header = getHeader({
    title: "LineGraph",
    tabs: {
        standard: 'Standard',
        stacked: 'Stacked'
    },
    docsUrl: 'https://cxjs.io/docs/charts/line-graphs'
});

import Default from './standard';

export default <cx>
    {header}
    <PureContainer layout={FirstVisibleChildLayout}>
        <SandboxedRoute route="+/standard">
            {Default}
        </SandboxedRoute>
        <SandboxedAsyncRoute route="+/stacked" content={()=>import("./stacked")} />
        <RedirectRoute redirect="+/standard" />
    </PureContainer>
</cx>

import {hmr} from '../../hmr.js';
hmr(module);