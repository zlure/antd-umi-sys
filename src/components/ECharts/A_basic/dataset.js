/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const { source } = props;
    console.log(JSON.stringify(source, null, 2));
    return {
        source
    };
};