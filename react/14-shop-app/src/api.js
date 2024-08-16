import axios from "axios";
import {
  parseFirestoreFields,
  toFirestoreFields,
} from "./utils/firebaseTranslate";

const API_KEY = "AIzaSyBm_BC-nNwiHwWhLSR4UUIBZS09TJ9AOdc";

const AUTH_TOKEN =
  "https://firestore.googleapis.com/v1/projects/shop-app-ce659/databases/(default)/documents";
const BASE_URL =
  "https://firestore.googleapis.com/v1/projects/shop-app-ce659/databases/(default)/documents";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

function getResultData(response) {
  if (response.data.length > 0) {
    const result = response.data.map((data) => {
      return {
        ...parseFirestoreFields(data.document.fields),
        docId: data.document.name.split("/").pop(),
      };
    });
    return result;
  } else {
    return {
      ...parseFirestoreFields(response.data.fields),
      docId: response.data.name.split("/").pop(),
    };
  }
}

export async function getDatasRest(collectionName, queryOptions) {
  const { conditions } = queryOptions;
  const [condition] = conditions;
  const { field, operator, value } = condition;
  try {
    const response = await api.post(":runQuery", {
      structuredQuery: {
        from: [{ collectionId: collectionName }],
        where: {
          fieldFilter: {
            field: { fieldPath: field },
            op: operator,
            value: { stringValue: value },
          },
        },
      },
    });
    return getResultData(response);
  } catch (error) {
    console.error("데이터 가져오기 오류: ", error);
  }
}

export async function getDataRest(url) {
  // /products/productDocId
  const response = await api.get(url);
  return getResultData(response);
}

export async function addDatasRest(url, addObj) {
  try {
    await api.patch(url, { fields: toFirestoreFields(addObj) });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteDatasRest(url) {
  try {
    await api.delete(url);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteDatasRestBatch(url, dataArr) {
  try {
    const requests = dataArr.map((item) => {
      return {
        delete: `projects/shop-app-ce659/databases/(default)/documents/${url}/${item.id}`,
      };
    });

    const response = await api.post(
      ":batchWrite",
      { writes: requests },
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
