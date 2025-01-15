import { SettingsService } from '@services/settings/settings.service.service';
import { UtilService } from '@services/util/util.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DbService } from '@services/db/db.service';
import { HttpClient } from '@angular/common/http'
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { EAppDbService } from '@services/db/e-app/e-app-db.service';
import { SalesIllustrationDbService } from '@services/db/sales-illustration/sales-illustration-db.service';
import { NetworkService } from '@services/network/network-service.service';
import { FORM_ACTIONS } from '@utils/enums/form-actions';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { File } from '@ionic-native/file/ngx';
import { Device } from '@ionic-native/device/ngx';
import { LeadsDbService } from '@services/db/leads/leads-db.service';
import { NeedsAnalysisDbService } from '@services/db/needs-analysis/needs-analysis-db.service';
import { IrpqDbService } from '@services/db/irpq/irpq-db.service';
import { SubmissionChecklistDbService } from '@services/db/submission-checklist/submission-checklist-db.service';
import { AlertService } from '@services/alert/alert.service';
import { defaulMockLeadData } from './data/owner-insured/defaultMockLeadData';
import { DEFAULT_MOCK_OCCUPATION_CODES } from './data/owner-insured/defaultMockOccupationCodes';
import { DEFAULT_MOCK_LOCATION } from './data/owner-insured/defaultMockLocation';
import { defaultMockLeadDBData } from './data/owner-insured/defaultMockLeadDBData';
import { CoreSyncService } from '@core/services';
import { Camera } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ImageResizer } from '@ionic-native/image-resizer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AgilaPluginServiceService } from '@services/agila-plugin-service/agila-plugin-service.service';

let UtilServiceMock: Partial<UtilService>;
let SettingsServiceMock: Partial<SettingsService>;
let StorageMock: Partial<Storage>;
let ActivatedRouteMock: Partial<ActivatedRoute>;
let DbServiceMock: Partial<DbService>;
let SQLiteMock: Partial<SQLite>;
let HttpClientMock: Partial<HttpClient>;
let HttpMock: Partial<HTTP>;
let NetworkServiceMock: Partial<NetworkService>;
let AppVersionMock: Partial<AppVersion>;
let LocationMock: Partial<Location>;
let SalesIllustrationDbServiceMock: Partial<SalesIllustrationDbService>
let EAppDbServiceMock: Partial<EAppDbService>;
let SQLitePorterMock: Partial<SQLitePorter>;
let FileMock: Partial<File>;
let DeviceMock: Partial<Device>;
let LeadsDbServiceMock: Partial<LeadsDbService>;
let NeedsAnalysisDbServiceMock: Partial<NeedsAnalysisDbService>;
let IrpqDbServiceMock: Partial<IrpqDbService>;
let AlertServiceMock: Partial<AlertService>;
let CoreSyncServiceMock: Partial<CoreSyncService>;
let CameraServiceMock: Partial<Camera>;
let Base64ServiceMock: Partial<Base64>;
let ImageResizerServiceMock: Partial<ImageResizer>;
let FilePathServiceMock: Partial<FilePath>;
let FileOpenerServiceMock: Partial<FileOpener>;
let AgilaPluginServiceServiceMock: Partial<AgilaPluginServiceService>;
let SubmissionChecklistDbServiceMock: Partial<SubmissionChecklistDbService>;

/* 
    ! IMPORTANT NOTE: Please DO NOT change the value under useValue if existing. It's only used for default values in order to avoid errors.
    * If you want to specify the values, use spreader when importing then override useValue or add the properties needed to the imported constant
    * e.g 
    providers: [
        { ...UtilServiceMockProvider, useValue: { -insert your code here- }}
        
        ...
    ]
*/

export let UtilServiceMockProvider = {
    provide: UtilService,
    useExisting: UtilServiceMock,
    useValue: {
        presentLoading: () => true,
        dismissLoading: () => true,
        createObjectArrFromDBData: () => [defaulMockLeadData],
        getOccupationName: () => '',
        getAddressName: () => '',
        changeTableToEditable: () => true,
        changeTableToReadOnly: () => true,
        setDisablingConditionalFunction: () => true,
        createOptionsFrObjArr: () => []
    }
};

export let SettingsServiceMockProvider = {
    provide: SettingsService,
    useExisting: SettingsServiceMock,
    useValue: {
        getOccupationCode: () => DEFAULT_MOCK_OCCUPATION_CODES,
        getGenericCode: () => 0
    }
};

export let StorageMockProvider = {
    provide: Storage,
    useExisting: StorageMock,
    useValue: {
        get: () => DEFAULT_MOCK_LOCATION
    }
}

export let ActivatedRouteMockProvider = {
    provide: ActivatedRoute,
    useExisting: ActivatedRouteMock,
    useValue: {
        snapshot: {
            params: {
                id: 1,
                action: FORM_ACTIONS.VIEW
            }
        },
        params: {
            subscribe: () => true
        }
    }
}

export let DbServiceMockProvider = {
    provide: DbService,
    useExisting: DbServiceMock,
    useValue: {
        getAllTableData: () => defaultMockLeadDBData,
        setDB: () => true,
        database: {
            executeSql: () => []
        }
    }
}

export let SQLiteMocProvider = {
    provide: SQLite,
    useExisting: SQLiteMock
}

export let HttpClientMocProvider = {
    provide: HttpClient,
    useExisting: HttpClientMock
}

export let AppVersionMocProvider = {
    provide: AppVersion,
    useExisting: AppVersionMock
}

export let LocationMockProvider = {
    provide: Location,
    useExisting: LocationMock,
    useValue: {}
}

export let SalesIllustrationDbServiceMockProvider = {
    provide: SalesIllustrationDbService,
    useExisting: SalesIllustrationDbServiceMock,
    useValue: {}
}

export let EAppDbServiceMockProvider = {
    provide: EAppDbService,
    useExisting: EAppDbServiceMock,
    useValue: {
        getAllTopUpDirection: () => [],
        updateTopUpDirection: () => true
    }
}

export let HttpMockProvider = {
    provide: HTTP,
    useExisting: HttpMock
}

export let NetworkServiceMockProvider = {
    provide: NetworkService,
    useExisting: NetworkServiceMock
}

export let SQLitePorterMockProvider = {
    provide: SQLitePorter,
    useExisting: SQLitePorterMock
}

export let FileMockProvider = {
    provide: File,
    useExisting: FileMock
}

export let DeviceMockProvider = {
    provide: Device,
    useExisting: DeviceMock
}

export let LeadsDbServiceMockProvider = {
    provide: LeadsDbService,
    useExisting: LeadsDbServiceMock
}

export let NeedsAnalysisDbServiceMockProvider = {
    provide: NeedsAnalysisDbService,
    useExisting: NeedsAnalysisDbServiceMock
}

export let IrpqDbServiceMockProvider = {
    provide: IrpqDbService,
    useExisting: IrpqDbServiceMock
}

export let AlertServiceMockProvider = {
    provide: AlertService,
    useExisting: AlertServiceMock
}

export let SyncServiceMockProvider = {
    provide: CoreSyncService,
    useExisting: CoreSyncServiceMock
}

export let CameraMockProvider = {
    provide: Camera,
    useExisting: CameraServiceMock
}

export let Base64ServiceMockProvider = {
    provide: Base64,
    useExisting: Base64ServiceMock
}

export let ImageResizerServiceMockProvider = {
    provide: ImageResizer,
    useExisting: ImageResizerServiceMock
}

export let FilePathServiceMockProvider = {
    provide: FilePath,
    useExisting: FilePathServiceMock
}

export let FileOpenerMockProvider = {
    provide: FileOpener,
    useExisting: FileOpenerServiceMock
}

export let AgilaPluginServiceServiceMockProvider = {
    provide: AgilaPluginServiceService,
    useExisting: AgilaPluginServiceServiceMock
}

export let SubmissionChecklistDbServiceMockProvider = {
    provide: SubmissionChecklistDbService,
    useExisting: SubmissionChecklistDbServiceMock
}
