
import { configCenter } from '@/config-center';
import { IConfigComponentGroup } from '@/model';
import {createContext} from 'react'

const config_center: IConfigComponentGroup[] = configCenter.antd
let AntdContext =  createContext({config_center});


export default AntdContext;